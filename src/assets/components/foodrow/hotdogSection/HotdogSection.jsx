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
                    title={
                        <>
                            <h2>{item.nome}</h2>
                            {/* Linha com salsichas e linguiças */}
                            <div>
                                {item.salcichas && <span>Salsichas: {item.salcichas}</span>}
                                {item.salcichas && item.linguiça && <span> | </span>}
                                {item.linguiça && <span>Linguiças: {item.linguiça}</span>}
                            </div>
                            <div className="preco">{item.preço.toFixed(2)} R$</div>
                        </>
                    }
                    description={
                        `Complementos: ${item.complementos.join(', ')}`
                    }
                />
            </List.Item>
            )}
        />
    </div>
);
}