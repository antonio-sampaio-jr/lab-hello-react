import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import './Footer.css';

function Footer()
{
    return(
        <article class="feet">
            <img src={icon1} class="foot" alt="" /><span>Declarative</span><p>React makes it painless to create interactive UIs.</p>
            <img src={icon2} class="foot" alt="" /><span>Components</span><p>Build encapsulated components that manage their state.</p>
            <img src={icon3} class="foot" alt="" /><span>Single-Way</span><p>A set of immutable values are passed to the component's.</p>
            <img src={icon4} class="foot" alt="" /><span>JSX</span><p>Staticlly-typed, designed to run on modern browsers.</p>s  
        </article>  
    );
}
export default Footer;