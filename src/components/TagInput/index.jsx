import { useState } from "react";
import { Container, ImageUpload } from "./styles";
import iconX from "../../assets/icons/iconX.svg";
import iconPlus from "../../assets/icons/iconPlus_small.svg";
import uploadImg from "../../assets/icons/upload.svg"
import defaultProps from "react-slick/lib/default-props";

export function TagInput({ value, fileName, isNew, onClick, tag, setTag, onChange, ...rest }) {

    function handleChangePic(e) {
        const file = e.target.files[0];
        const imgPreview = URL.createObjectURL(file);
        console.log("TAG:", tag, setTag)

        setTag({...tag, picture: imgPreview, file});
    }

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
                <ImageUpload htmlFor="tagImg">
                    <img src={uploadImg} alt="ícone de upload" />

                    <span>{fileName}</span>             
                    
                    <input 
                    type="file" 
                    id="tagImg"
                    onChange={handleChangePic}
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