import react from "react";
import { useState } from "react";
import Baslik from "./component/Baslik.js";
import Metin from "./component/Metin.js";
import Sablon from "./component/Sablon.js";
import nisantasi from "./nisantasi.jpg";
import Yazi from "./component/Yazi.js";
import JForce from "./jforce.jpg";
import Pofis from "./pofis.jpg";
import Hakkımızda from "././component/Hakkımızda.js";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/b ootstrap.min.css";

function App() {
  const [control, setControl] = useState("Anasayfa");
  const [adi, setAdi] = useState("");
  const [Tel, setTel] = useState("");
  const [Mesaj, setMesaj] = useState("");
  const [sayac, setSayac] = useState(0);
  const [value, setValue] = useState(null);
  const [studentList, setstudentList] = useState([
    { id: 21, lastName: "Bektaş", firstName: "Derya" },
    { id: 22, lastName: "Dengrhtfiz", firstName: "Dilnhjara" },
    { id: 23, lastName: "bhgv", firstName: "jbshxgtfd" },
    { id: 24, lastName: "Dnhsbiz", firstName: "Dagyugra" },
  ]);
  useEffect(() => {}, [control]);

  console.log(studentList);

  const uyarı = () => {
    if (adi.length < 10) {
      alert("Adı 10 Karakterden Kısa Girdiniz!!!");
    }
    if (Tel.length < 11) {
      alert("Telefon Numarası İçin Yetersiz Karakter Girdiniz!!!");
    }
    if (Mesaj.length < 30) {
      alert("Mesaj Yeterli Uzunlukta Değil!!!");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const update = () => {
    setstudentList(
      studentList.map((e) => (e.id === value.id ? (e = value) : e))
    );
  };

  return (
    <div>
      <></>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          id:{value.id + " "}
          name:
          <input
            type="text"
            value={value.firstName}
            onChange={(e) => setValue({ ...value, firstName: e.target.value })}
          />
          surname:
          <input
            type="text"
            value={value.lastName}
            onChange={(e) => setValue({ ...value, lastName: e.target.value })}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={() => update()}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
      <div style={{ width: "100%", float: "left" }}>
        <button onClick={() => setControl("Anasayfa")}> Anasayfa </button>
        <button onClick={() => setControl("iletişim")}> İletişim </button>
        <button onClick={() => setControl("Hakkımızda")}> Hakkımmızda</button>
        <button onClick={() => setControl("tablo")}>Tablo</button>
      </div>
      <table border="1px" style={{ height: "100px", width: "100px" }}>
        <tbody>
          <tr>
            <td colSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={2}></td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          border: "2px solid black",
          width: "calc(100% - 40px)",
          display: "flex",
          flexDirection: "column",
          margin: "20px",
        }}
      />
      {control === "Anasayfa" ? (
        <>
          <div
            style={{
              margin: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "calc(100% - 40px)",
            }}
          >
            <Sablon img={nisantasi} />
            <Sablon img={JForce} />
            <Sablon img={nisantasi} />
            <Sablon img={JForce} />
            <Sablon img={nisantasi} />
            <Sablon img={JForce} />
            <Sablon img={nisantasi} />
            <Sablon img={JForce} />
            <Sablon img={nisantasi} />
            <Sablon img={JForce} />
          </div>
          <Baslik />
          <Metin img={JForce} text="JForce" />
          <Metin img={nisantasi} text="Nişantaşı" />
          <div style={{ margin: "20px" }}>
            <Yazi derya="yazi1" yazi="Yerin seni çektiği kadar ağırsın. " />
            <Yazi
              derya="yazi2"
              yazi=" Güneşin doğuşundadır doğanın sana verdiği değer"
            />
          </div>
        </>
      ) : control === "iletişim" ? (
        <>
          <div style={{ margin: "20px" }}>
            <div>
              <b style={{ marginRight: "26px" }}>Adı:</b>
              <input
                type="text"
                onChange={(a) => setAdi(a.target.value)}
                value={adi}
              />
            </div>
            <div>
              <b style={{ marginRight: "30px" }}>Tel:</b>
              <input
                type="text"
                onChange={(e) => setTel(e.target.value)}
                value={Tel}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div width="50%" style={{ paddingTop: "5px" }}>
                <b style={{ marginRight: "10px" }}> Mesaj:</b>
                <textarea
                  onChange={(e) => setMesaj(e.target.value)}
                  value={Mesaj}
                ></textarea>
              </div>
            </div>
          </div>
          <button onClick={() => uyarı()}> Gönder</button>
        </>
      ) : control === "tablo" ? (
        <>
          <table border="1px">
            <tr>
              <td>id:</td>
              <td>Adı:</td>
              <td>Soyadı:</td>
              <td>Modal:</td>
            </tr>
            {studentList
              ? studentList.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>{e.id}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <button
                          variant="primary"
                          onClick={() => {
                            handleShow();
                            setValue(e);
                          }}
                        >
                          popup
                        </button>
                      </tr>
                    </>
                  );
                })
              : null}
            {/* <Hakkımızda img={Pofis} />
          <Yazi derya="yazi1" yazi="Yerin seni çektiği kadar ağırsın. " /> */}
          </table>
        </>
      ) : null}{" "}
    </div>
  );
}

export default App;
