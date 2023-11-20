import { Card } from "antd";
import { Content } from "antd/es/layout/layout";

interface Oder {
    name: string;
    price: Number;
    stock: number;
    img: string;
}

export default function ContentComp() {
    function oderBlock(oder: Oder) {
        return (
            <Card style={{width:"512px", height:"512px"}} cover={<img src={oder.img} />}>
                <div className="oderdescription">
                    <p>Test</p>
                </div>
            </Card>
        );
    }

    let listOder:Array<Oder> = new Array;

    listOder.push({
        img: "test",
        name: "",
        price: 10,
        stock: 0
    },{
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    },{
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    },{
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    },{
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    });

    return (
        <Content style={{ position: "relative", display:"grid" }}>
            {listOder.map((x)=>{
                return(oderBlock(x))
            })}
        </Content>
    );
}