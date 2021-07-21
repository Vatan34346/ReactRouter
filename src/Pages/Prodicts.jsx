import { Link } from "react-router-dom";

const Produts =()=>{
    return (
    <section>
        <h1>This is products</h1>
        <ul>
            <li><Link to='/products/book'>book</Link></li>
            <li><Link  to='/products/A Carpet'>A Carpet</Link></li>
            <li><Link  to='/products/ Online Course'>An Online Course</Link></li>
        </ul>
        </section>);
}

export default Produts;