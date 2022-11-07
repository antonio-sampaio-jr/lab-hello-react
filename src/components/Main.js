import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';
import './Main.css';

function Main()
{
    return(
        <article className='article'>
            <nav>
                <img src={logo} alt="" />
                <img src={menu} alt="" />
            </nav>
            <section>
                <h1>Say hello to<p> ReactJS</p></h1>
                <h3>You will learn how to use <p>the most popular frontend library,</p> and become a super Ninja developer.</h3>
            </section>
            <section>
                <button>Awesome!</button> 
            </section>
        </article>
    );
}

export default Main;