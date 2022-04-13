import "./Component.css";

export default function Metin(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <img src={props.img} width="150px" height="150px" />
            </td>
            <td>Adı</td>
            <td>:</td>
            <td>Ali</td>
          </tr>
          <tr>
            <td>Soyadı</td>
            <td>:</td>
            <td>Ali</td>{" "}
          </tr>
          <tr>
            <td>Yas</td>
            <td>:</td>
            <td>40</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
