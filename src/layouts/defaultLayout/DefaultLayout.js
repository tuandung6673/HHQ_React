import Footer from "../../components/User/Footer/Footer";
import UserNav from "../../components/User/UserNav/UserNav";

function DefaultLayout(props) {
  return (
    <div>
      <div>
        <UserNav></UserNav>
      </div>
      <div>
        {props.children}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  ) 
}

export default DefaultLayout;