import { Container, ImageUpload } from "./styles";
import iconX from "../../assets/icons/iconX.svg";
import iconPlus from "../../assets/icons/iconPlus_small.svg";
import uploadImg from "../../assets/icons/upload.svg"

export function TagInput({ value, fileName, isNew, onClick, onChange, handleChangeImg, ...rest }) {

    return (
        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew}
            onChange={onChange}
            {...rest} 
            />

            <div>
                <ImageUpload htmlFor={value}>
                    <img src={uploadImg} alt="ícone de upload" />

                    <span>{fileName}</span>             
                    
                    <input 
                    type="file" 
                    id={value}
                    onChange={handleChangeImg}
                    />
                </ImageUpload>    

                <button
                id="buttontag"
                type="button"
                onClick={onClick}
                >
                    <img src={ isNew ? iconPlus : iconX } /> 
                </button>
            </div>
        </Container>
    )
}