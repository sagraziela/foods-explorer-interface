import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

export function EditFood() {
    
    const [food, setFood] = useState({});

    const [ingredientsDB, setIngredientsDB] = useState([]);

    const [tag, setTag] = useState({ name: "", picture: "", file: null });

    const { user, pictureUpload } = useAuth();

    const [foodImage, setFoodImage] = useState({ picture: "", file: null});

    const navigate = new useNavigate();

    const params = useParams();

    function handleChange(e) {
        setFood({...food, [e.target.name]: e.target.value});
    }
    
    function handleChangeFoodImg(e) {
        const file = e.target.files[0];
        const imgPreview = URL.createObjectURL(file);
        
        setFoodImage({ picture: imgPreview, file });
    }
    
    function handleChangeIngredientImg(e) {
        const file = e.target.files[0];
        const imgPreview = URL.createObjectURL(file);
        console.log(file)
        
        setTag({...tag, picture: imgPreview, file});
    }
    
    function handleAddIngredient() {
        setFood({...food, ingredients: [...food.ingredients, tag]});
    }
    
    function handleRemoveIngredient(deleted) {
        const filteredIngredients = food.ingredients.filter(ingredient => ingredient.name !== deleted);
        setFood({...food, ingredients: filteredIngredients});
    }

    async function handleAddNewIngredientsToDB(newItems) {
        const newIngredients = await api.post(`/ingredients/${food.id}`, { ingredients: newItems });

        newIngredients.data.map( async createdIngr => {
            const matchedIngredient = food.ingredients.find(ingredient => createdIngr.name === ingredient.name);

            await pictureUpload({ 
                ingredient: createdIngr, 
                imageFile: matchedIngredient.file 
            });
        })
    }
    
    async function saveUpdatedFood(e) {
        e.preventDefault();
        
        if (!food.title) {
            return alert("É necessário definir o nome do prato.")
        }

        if (tag.name !== "") {
            return alert(`Você digitou o ingrediente "${tag}", mas não o inseriu na lista.Aperte o botão "+" para adicioná-lo ou limpe o campo do novo ingrediente.`)
        }

        if (!food.category) {
            return alert("É necessário definir a categoria do prato.")
        }

        if (!food.price) {
            return alert("É necessário definir o preço do prato.")
        }

        if (!food.description) {
            const userConfirm = confirm("Tem certeza que deseja atualizar o prato sem nenhuma descrição?")

            if (!userConfirm) {
                return
            }
        }
        
        try {
            const updatedFood = await api.put(`/foods/${food.id}`, food);

            console.log(updatedFood)
            
            if (foodImage.file) {
                await pictureUpload({ food: updatedFood.data, imageFile: foodImage.file });
            }

            ingredientsDB.map(async itemDB => {
                const matchedItem = food.ingredients.find(item => item.id === itemDB.id);

                if (!matchedItem) {
                    await api.delete(`/ingredients/${itemDB.id}`);
                }
            });

            const newIngredients = food.ingredients.filter(item => !item.id)

            newIngredients[0] ? await handleAddNewIngredientsToDB(newIngredients) : null;
            
            alert(`"${food.title}" atualizado com sucesso!`);
            navigate("/");

        } catch(error) {
            if(error.response) {
                return error.response.data.message;
            } else {
                return console.log(error)
            }
        }
    }

    useEffect(() => {
        async function fetchFood() {
            const response = await api.get(`foods/${params.id}`);
            setFood(response.data);
        }

        fetchFood();
    }, [])

    useEffect(() => {
        setTag({ name: "", picture: "", file: null });
    }, [food.ingredients])

    useEffect(() => {
        async function fetchIngredients() {
            const response = await api.get(`${api.defaults.baseURL}/ingredients/${params.id}`);
            setIngredientsDB(response.data)
        }

        fetchIngredients()
    }, [])

    return (
        <Container>
            <Header />

            <main>
                <Link to={"/"}>
                    <img src={arrowLeftImg} alt="seta para esquerda" />
                    voltar
                </Link>

                <Form>
                    <h1>Editar prato</h1>

                    <section className="sectionOne">
                        <div>
                            <p>Imagem do prato</p>
                            <ImageUpload htmlFor="foodImg">
                                <img src={uploadImg} alt="ícone de upload" />
                                {
                                    !foodImage.file && 
                                    <span>{food.picture}</span>
                                }

                                {
                                    foodImage.file && 
                                    <span>{foodImage.file.name}</span>
                                }
                                <input 
                                type="file" 
                                id="foodImg"
                                name="picture"
                                onChange={handleChangeFoodImg}
                                />
                            </ImageUpload>
                        </div>

                        <Input 
                        label="Nome"
                        name="title"
                        value={food.title}
                        placeholder="Ex: Salada Ceasar"
                        onChange={handleChange} 
                        />
                    </section>

                    <section className="sectionTwo">
                    <Ingredients>
                            <p>Ingredientes</p>

                            <div className="tags">
                                { food.ingredients &&
                                    food.ingredients.map((ingredient, index) => (
                                        <TagInput
                                        key={String(index)}
                                        value={ingredient.name}
                                        fileName={ingredient.file ? ingredient.file.name : ingredient.picture }
                                        onClick={() => handleRemoveIngredient(ingredient.name)}
                                        />
                                     ))
                                }

                                <TagInput 
                                isNew
                                name="tag"
                                placeholder="Adicionar" 
                                value={tag.name}
                                fileName={tag.file && tag.file.name}
                                handleChangeImg={handleChangeIngredientImg}
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
                            value={food.category || "Escolha a categoria..."}
                            >
                                <option value="Escolha a categoria..." disabled>
                                    Escolha a categoria...
                                </option>
                                <option value="prato principal">Prato principal</option>
                                <option value="sobremesa">Sobremesa</option>
                                <option value="bebida">Bebida</option>
                            </select>
                        </div>
                        
                        <Input 
                        label="Preço"
                        name="price"
                        value={food.price}
                        placeholder="R$ 00,00"
                        onChange={handleChange} 
                        />
                    </section>
                    
                    <section className="sectionFour">
                        <label htmlFor="description">Descrição</label>
                        <Textarea 
                        id="description"
                        label="Descrição"
                        name="description"
                        value={food.description}
                        placeholder="Fale brevemente sobre o prato, sua composição e preparo."
                        onChange={handleChange}
                        />
                    </section>
                    
                    <Button 
                    title="Salvar alterações" 
                    grayBg
                    onClick={saveUpdatedFood}
                    />
                </Form>
            </main>
            <Footer />
        </Container>
    )
}