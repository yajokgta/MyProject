import { Card, Col, Row } from "antd";
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
            <Col span={6}>
                <Card style={{ height: "512px" }} cover={<img src={oder.img} />}>
                    <div className="oderdescription">
                        <p>Test</p>
                    </div>
                </Card>
            </Col>
        );
    }

    let listOder: Array<Oder> = new Array;

    listOder.push({
        img: "test",
        name: "",
        price: 10,
        stock: 0
    }, {
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    }, {
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    }, {
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    }, {
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    }, {
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    }, {
        img: "xxx",
        name: "",
        price: 10,
        stock: 0
    });

    return (
        <Content>
            <Row style={{ justifyContent: "flex-start" }}>
                {listOder.map((x) => {
                    return (oderBlock(x))
                })}
            </Row>
        </Content>
    );
}