import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { Container, SearchInput } from "./styles";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { Button } from "../Button";
import searchImg from "../../assets/icons/search_img.svg";
import receiptImg from "../../assets/icons/receipt.svg"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Header({ setSearch }) {

  const [itemsQuantity, setItemsQuantity] = useState(0);

  const { user, signOut } = useAuth();

  const { cart, clearCart } = useCart();

  const navigate = useNavigate();

  function handleSignOut() {
    const assureSignOut = confirm("Tem certeza que deseja sair da aplicação?");

    if (assureSignOut) {
      signOut()
      clearCart()
    }
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
  }, [cart]);

  return (
    <Container>
      <Link to={"/"}>
        <Logo />
      </Link>

      <SearchInput>
        <img src={searchImg} alt="lupa" />
        <input 
        type="text" 
        placeholder="Busque pelas opções de pratos"
        onChange={e => setSearch(e.target.value)}
        />
      </SearchInput>

      { user.admin === 0 &&
          <Button
          icon={receiptImg}
          title={`Meu pedido (${itemsQuantity})`}
          onClick={() => navigate("/payment")}
          />
      }

      { user.admin === 1 &&
          <Button
          title="Pedidos"
          onClick={() => navigate(`/orders`)}
          />
      }

      <div className="menuArea"></div>

      <Menu handleSignOut={ handleSignOut } />

    </Container>
  )
    
}
