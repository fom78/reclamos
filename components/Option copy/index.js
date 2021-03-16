// import { Container, AvatarStyled, UserName } from './estilos'

export default function Option ({ type = 'radio', value, checked = false, onChange, texto, name }) {
  return (
    <>
      <div>
        <label>
          <input
            type={type}
            value={value}
            checked={checked}
            name={name}
            onChange={onChange}
          />
          {texto}
          <i />
        </label>
      </div>

      <style jsx>{`
        label {
          position: relative;
          margin-bottom: 30px;
          padding:5px 0 5px 60px; /* Damos un padding de 60px para posicionar el elemento <i> en este espacio*/
          display: block;
        }
        input {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          visibility: hidden;
          position: absolute;
          right: 0;
        }

        input + i {
          background: #f0f0f0;
          border:2px solid rgba(0,0,0,0.2);
          position: absolute; 
          left: 0;
          top: 0;
        }
        input[type=radio] + i{
          height: 30px;
          width: 30px;
          border-radius: 100%;
          left: 15px;
          }

          input[type=radio] + i:before{
            content: '';
            display: block;
            height: 18px;
            width: 18px;
            background: red;
            border-radius: 100%;
            position: absolute;
            z-index: 1;
            top: 4px;
            left: 4px;
            background:#2AC176;
            transition: all 0.25s ease; /* Todas las propiedades | tiempo | tipo movimiento */
            transform: scale(0) /* Lo reducimos a 0*/ ;
            opacity: 0; /* Lo ocultamos*/
          }

          input[type=radio]:checked + i:before{
            transform: scale(1);
            opacity: 1;
          }

          label:hover input[type=radio]:not(:checked) + i{
            background: #B1E8CD;
          }
`}
      </style>
    </>
  )
}
