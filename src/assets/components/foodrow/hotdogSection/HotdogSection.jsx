import { Image, List } from "antd";
import './HotdogSection.css';

export default function HotdogRows({ hotdog }) {
   return (
    <div className="hotdog-list-container">
         <Image
         preview={false}
        src="/dogao.png"
        />
        <List
            header={
                 <h1>hotdog</h1>
                }
            bordered
            dataSource={hotdog}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        title={<><h2>{item.nome} </h2> <div className="preco">{item.preço.toFixed(2)} R$</div> </>}
                         description={
                            `Complementos: ${item.complementos.join(', ')}`
                            + (item.salcichas ? ` | Salsichas: ${item.salcichas}` : '')
                            + (item.linguiça ? ` | Linguiças: ${item.linguiça}` : '')
                        }
                    />
                    
                </List.Item>
            )}
        />
    </div>
);
}