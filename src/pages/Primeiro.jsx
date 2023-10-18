import LinkSegundo from "../components/LinkSegundo";
import LinkGenerico from "../components/LinkGenerico/LinkGenerico";

const Primeiro = () => {

    const dados = [
        ["https://www.ibmec.br", "ibmec"],

        ["https://estude.ibmec.br/ibmec-hubs", "ibmec-hubs"],

        ["https://botafogo.com.br/", "botafogo"]
    ];

    const links = dados.map( (ele) => (
        <LinkGenerico
        key={ele[1]}
        texto={ele[1]}
        endereco={ele[0]}
        />
    ))

    return (<div>
                <h3>Meu título</h3>
                <p>Meu texto</p>
                {links}
                <LinkSegundo/>
                <LinkGenerico 
                texto = 'texto do link'
                endereco = 'https://g1.globo.com/'/>
            </div>);
};

export default Primeiro;