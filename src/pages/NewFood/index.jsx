import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container, ImageUpload, Form, Textarea, Ingredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { TagInput } from "../../components/TagInput";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import arrowLeftImg from "../../assets/icons/arrow_left.svg";
import uploadImg from "../../assets/icons/upload.svg";
import { useEffect } from "react";

export function NewFood() {
    
    const [state, setState] = useState({ title: "", category: "", price: "", description: "", picture: null });

    const [ingredients, setIngredients] = useState([]);

    const [tag, setTag] = useState({ name: "", picture: "", file: null });

    const { pictureUpload } = useAuth();

    const [foodImage, setFoodImage] = useState({ picture: "", file: null});

    const navigate = useNavigate();

    function handleChange(e) {
        setState({...state, [e.target.name]: e.target.value});
    }
    
    function handleAddIngredient() {
        setIngredients([...ingredients, tag]);
    }

    useEffect(() => {
        console.log(tag)
        setTag({ name: "", picture: "", file: null });
    }, [ingredients])

    function handleRemoveIngredient(deleted) {
        const filteredIngredients = ingredients.filter(ingredient => ingredient.name !== deleted.name);
        setIngredients(filteredIngredients)
    }

    function handleChangePicture(e) {
        const file = e.target.files[0];
        const imgPreview = URL.createObjectURL(file);

        setFoodImage({ picture: imgPreview, file });
    }

    async function saveNewFood(e) {
        e.preventDefault();

        if (!state.title) {
            return alert("É necessário definir o nome do novo prato para cadastrá-lo.")
        }

        if (foodImage.file === null) {
            return confirm("Tem certeza que deseja salvar o novo prato sem uma foto?")
        }

        if (tag.name !== "") {
            return alert(`Você digitou o ingrediente "${tag}", mas não o inseriu na lista.Aperte o botão "+" para adicioná-lo ou limpe o campo do novo ingrediente.`)
        }

        if (!state.title) {
            return alert("É necessário definir o nome do novo prato para cadastrá-lo.")
        }

        if (!state.category) {
            return alert("É necessário definir a categoria do novo prato para cadastrá-lo.")
        }

        if (!state.price) {
            return alert("É necessário definir o preço do novo prato para cadastrá-lo.")
        }

        if (!state.description) {
            const confirmNewFood = confirm("Tem certeza que deseja cadastrar o novo prato sem nenhuma descrição?")

            if (!confirmNewFood) {
                return
            }
        }
        
        try {
            const createdFood = await api.post(`/foods`, {
                ...state,
                ingredients
            });
            await pictureUpload({ food: createdFood.data, imageFile: foodImage.file });
            
            const createdIngredients = await api.get(`${api.defaults.baseURL}/ingredients/${createdFood.data.id}`)
            
            createdIngredients.data.map( async createdIngr => {
                console.log(createdIngr)
                const matchIngredient = ingredients.filter(ingredient => createdIngr.name === ingredient.name);

                await pictureUpload({ ingredient: createdIngr, imageFile: matchIngredient.file });
            })
            

            const confirmation = confirm(`Prato "${state.title}" cadastrado com sucesso! Deseja cadastrar um novo prato?`);

            confirmation ? setState({ title: "", category: "", ingredients: [], price: "", description: "", picture: null }) : navigate("/");

        } catch(error) {
            if(error.response) {
                return error.response.data.message;
            } else {
                return console.log(error)
            }
        }
    }

    return (

      
        <Container>
            <Header />
            {console.log("PAGE:", tag, setTag)}
            
            <main>
                <a href="/home">
                    <img src={arrowLeftImg} alt="seta para esquerda" />
                    voltar
                </a>

                <Form>
                    <h1>Editar prato</h1>

                    <section className="sectionOne">
                        <div>
                            <p>Imagem do prato</p>
                            <ImageUpload htmlFor="foodImg">
                                <img src={uploadImg} alt="ícone de upload" />
                                {
                                    !foodImage.file && 
                                    <span>Carregue sua foto</span>
                                }
                                {
                                    foodImage.file && 
                                    <span>{foodImage.file.name}</span>
                                }
                                <input 
                                type="file" 
                                id="foodImg"
                                name="picture"
                                onChange={handleChangePicture}
                                />
                            </ImageUpload>
                        </div>

                        <Input 
                        label="Nome"
                        name="title"
                        onChange={handleChange}
                        placeholder="Ex: Salada Ceasar" 
                        />
                    </section>

                    <section className="sectionTwo">
                    <Ingredients>
                            <p>Ingredientes</p>

                            <div className="tags">
                                { ingredients[0] &&
                                    ingredients.map((ingredient, index) => (
                                        <TagInput
                                        key={String(index)}
                                        value={ingredient.name}
                                        fileName={ingredient.file.name}
                                        onClick={() => handleRemoveIngredient(ingredient.name)}
                                        />
                                     ))
                                }

                                <TagInput 
                                isNew
                                name="tag"
                                value={tag.name}
                                fileName={tag.file && tag.file.name}
                                tag={tag}
                                setTag={setTag}
                                placeholder="Adicionar" 
                                onChange={e => setTag({...tag, name: e.target.value})}
                                onClick={handleAddIngredient}
                                />
                            </div>
                        </Ingredients>
                    </section>

                    <section className="sectionThree">
                        <div>
                            <p>Categoria</p>
                            <select 
                            name="category"
                            onChange={handleChange}
                            >
                                <option value="" disabled selected>Escolha a categoria...</option>
                                <option value="prato principal">Prato principal</option>
                                <option value="sobremesa">Sobremesa</option>
                                <option value="bebida">Bebida</option>
                            </select>
                        </div>
                        
                        <Input 
                        label="Preço"
                        name="price"
                        onChange={handleChange}
                        placeholder="R$ 00,00" 
                        />
                    </section>
                    
                    <section className="sectionFour">
                        <label htmlFor="description">Descrição</label>
                        <Textarea 
                        id="description"
                        label="Descrição"
                        name="description"
                        onChange={handleChange}
                        placeholder="Fale brevemente sobre o prato, sua composição e preparo."
                        />
                    </section>
                    
                    <Button 
                    title="Adicionar prato" 
                    grayBg
                    onClick={saveNewFood}
                    />
                </Form>
            </main>
            <Footer />
        </Container>
    )
}