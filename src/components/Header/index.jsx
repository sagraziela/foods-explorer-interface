import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { Container, SearchInput } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import searchImg from "../../assets/icons/search_img.svg";
import receiptImg from "../../assets/icons/receipt.svg"
import signOutImg from "../../assets/icons/sign_out_symbol.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Header({ setSearch }) {

  const [itemsQuantity, setItemsQuantity] = useState(0);

  const { signOut } = useAuth();

  const { cart, clearCart } = useCart();

  const navigate = new useNavigate();

  function handleSignOut() {
    const assureSignOut = confirm("Tem certeza que deseja sair da aplicação?");

    if (assureSignOut) {
      signOut()
      clearCart()
    }
    
    return
  }


  useEffect(() => {
    if (cart[0]) {
      let arrayItemsQuantity = [];

      cart.map(item => {
        arrayItemsQuantity.push(Number(item.quantity));
      })

      const total = arrayItemsQuantity.reduce((sum, i) => {
        return sum + i
      })

      setItemsQuantity(total)
    }
  }, [cart])
  

  return (
    <Container>
      <Link to={"/"}>
        <Logo />
      </Link>

      <a href="#">Meus favoritos</a>

      <SearchInput>
        <img src={searchImg} alt="lupa" />
        <input 
        type="text" 
        placeholder="Busque pelas opções de pratos"
        onChange={setSearch}
        />
      </SearchInput>

      <Button
        icon={receiptImg}
        title={`Meu pedido (${itemsQuantity})`}
        onClick={() => navigate("/payment")}
      />

      <a href="/" onClick={handleSignOut}>
        <img src={signOutImg} alt="" />
      </a>


    </Container>
  )
    
}
