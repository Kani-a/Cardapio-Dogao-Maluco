import { Image, List } from "antd";
import './HotdogSection.css';

export default function HotdogRows({ hotdog }) {
  return (
    <div className="hotdog-list-container">
     <Image
        preview={false}
        src={`${import.meta.env.BASE_URL}dogao.png`}
        />
      <List
        header={<h2>hotdogs</h2>}
        bordered
        dataSource={hotdog}
        renderItem={(item) => (
          <List.Item>
  <List.Item.Meta
    title={
      <div className="hotdog-title-block">
        <div className="hotdog-title-row">
          <h2>{item.nome}</h2>
          <div className="preco">{item.preço.toFixed(2)} R$</div>
        </div>
        <div className="hotdog-info-row">
          {item.salcichas && <span>salsichas: {item.salcichas}</span>}
          {item.salcichas && item.linguiça && <span> | </span>}
          {item.linguiça && <span>linguiças: {item.linguiça}</span>}
        </div>
      </div>
    }
    description={`Complementos: ${item.complementos.join(", ")}`}
  />
</List.Item>
        )}
      />
    </div>
  );
}
