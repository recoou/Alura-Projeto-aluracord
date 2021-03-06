import React, {useState} from 'react';
import {Box, Button, Text, TextField, Image} from '@skynexui/components';
import Fundo from '../imagens/LoFi_Background.jpg';
import {useRouter} from 'next/router';

import appConfig from "../config.json"; 
import { urlObjectKeys } from 'next/dist/shared/lib/utils';

function Titulo(props){
    const Tag = props.tag || "h1";
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`

                ${Tag}{
                    //color: ${appConfig.theme.colors.neutrals["000"]};
                    color: orange;
                    font-size: 24px;
                    font-weight: 600;
                }

            `}</style>
        </>
            
        
        
    )
}

// function HomePage() {

//     return (
//     <div>
//         <GlobalStyle/>
//         <Titulo tag="h2">Boas Vindas!</Titulo>
//         <h2>Discord - Otaku Universe</h2>
 
//     </div>

    
//     )
// }

export default function PaginaInicial() {
    //const username = 'recoou';
    const [username, setUsername] = useState('recoou');
    const roteamento = useRouter();
  
    return (
      <>        
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.neutrals["400"],
            backgroundImage: "url('https://wallpapercave.com/wp/wp2337073.jpg')",
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.primary["deepSpace"],
              opacity: 0.75,
            }}
          >
            {/* Formul??rio */}
            <Box
              as="form"
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
              onSubmit={(evento) =>{
                evento.preventDefault()
                console.log("Submeteram o Form")
                roteamento.push("/chat");
              }}
            >
              <Titulo tag="h2">Bem Vindo ao LoFi Hip Hop Verso</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
  
              <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.violet[200],
                    mainColor: appConfig.theme.colors.violet[500],
                    mainColorHighlight: appConfig.theme.colors.violet[600],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
                value={username}
                onChange={(evento) => {
                  setUsername(evento.target.value);
                  console.log(username);
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.violet[600],
                  mainColorLight: appConfig.theme.colors.violet[500],
                  mainColorStrong: appConfig.theme.colors.violet[700],
                }}
              />
            </Box>
            {/* Formul??rio */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }