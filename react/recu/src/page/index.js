import { Div } from './styled';

export default function home() {
    return (
        <Div>
            <div className="container">
                <div className="area">
                    <div className="titulo">
                        Novo
                    </div>

                    <div className="row">
                        <div className="nome">
                            Nome:
                        </div>

                        <div className="input">
                            <input type="text" placeholder="" ></input>
                        </div>

                        <div className="botao">
                            <button>OK</button>
                        </div>
                    </div>

                    <div className="row2">
                        <div className="titulo">
                            Listar
                        </div>

                        <div className="botao">
                            <button>OK</button>
                        </div>
                    </div>
                </div>

                <div className="tabela">
                    tabela aqui
                </div>
            </div>
        </Div>
    );
}