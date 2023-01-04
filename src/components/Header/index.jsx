import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, SearchInput } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import searchImg from "../../assets/icons/search_img.svg";
import receiptImg from "../../assets/icons/receipt.svg"
import signOutImg from "../../assets/icons/sign_out_symbol.svg";
import { Link } from "react-router-dom";

export function Header() {
  const { signOut } = useAuth();

  function handleSignOut() {
    const assureSignOut = confirm("Tem certeza que deseja sair da aplicação?");

    assureSignOut ? signOut() : null;
  }

  return (
    <Container>
      <Logo />

      <a href="#">Meus favoritos</a>

      <SearchInput>
        <img src={searchImg} alt="lupa" />
        <input 
        type="text" 
        placeholder="Busque pelas opções de pratos"
        />
      </SearchInput>

      <Button
        icon={receiptImg}
        title="Meu Pedido (0)"
      />

      <a href="/" onClick={handleSignOut}>
        <img src={signOutImg} alt="" />
      </a>


    </Container>
  )
    
}
