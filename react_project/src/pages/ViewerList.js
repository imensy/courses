import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import AddViewer from '../components/AddViewer'
import EditViewer from '../components/EditViewer';
import Viewer from '../components/Viewer';

export default function ViewerList(){
    const [viewers, setViewers] = useState(
        [
            {
                id: 1,
              name: 'MapeSync',
              position: '????',
              img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/0f1fa19b-1344-4ab5-b3f1-cdd60e290f76-profile_image-70x70.jpeg'
            },
            {
                id: 2,
              name: 'piclesvolt',
              position: '⭐ SUB ⭐',
              img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/5240ed97-f77c-49c7-a8df-1d152e9ffbaa-profile_image-70x70.png'
            },
            {
                id: 3,
                name: 'aron11112',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-70x70.png'
            },
            {
                id: 4,
                name: 'marckinhosdj',
                position: 'ativo',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8fcf59c3-8a74-48e1-9b18-27fc6c3353df-profile_image-70x70.png'
            },
            {
                id: 5,
                name: 'Malnoi',
                position: 'passiva',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a9a4a8eb-486b-4349-8588-6f175f3e62a3-profile_image-70x70.png'
            },
            {
                id: 6,
                name: 'turkinhaa',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d5beba86-b746-48f6-8b60-4ddd44cea565-profile_image-70x70.png'
            },
            {
                id: 7,
                name: 'Niiikie',
                position: '⭐ SUB ⭐',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6f8340c5-12d1-4ad6-88f9-4417fc61e475-profile_image-70x70.png'
            },
            {
                id: 8,
                name: 'vasodepimentadasabrinoca',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/930ed75f-d225-4d59-87ee-923c71c662b6-profile_image-70x70.jpeg'
            },
            {
                id: 9,
                name: 'mariagif',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/532b31d0-bfea-4808-82e5-de6ea0bab629-profile_image-70x70.png'
            },
            {
                id: 10,
                name: 'jannaimunda',
                position: 'versátil',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9ed3b7e8-af01-480c-ad57-0a8edd6de514-profile_image-70x70.png'
            },
            {
                id: 11,
                name: 'RabudaLTDA',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-70x70.png'
            },
            {
                id: 12,
                name: 'yurisup',
                position: '⭐ SUB ⭐',
                img: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-70x70.png'
            },
            {
                id: 13,
                name: 'lucasfanfavorite',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b5a5ce15-ceb0-44ba-a5c0-dee5c02ddadf-profile_image-70x70.png'
            },
            {
                id: 14,
                name: 'antthyy',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3be8de6b-aa78-46ab-9836-b583335c7661-profile_image-70x70.png'
            },
            {
                id: 15,
                name: 'ravizeyr4',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/eca22904-5643-404d-b040-7f37a3628f3d-profile_image-70x70.jpeg'
            },
            {
                id: 16,
                name: 'asnerissy_',
                position: 'passiva',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/46ec4dad-7bb5-44ba-bc8f-84789e5eefa5-profile_image-70x70.png'
            },
            {
                id: 17,
                name: 'welfo',
                position: 'versatil',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/47dd1956-f85b-41c3-ae98-be1c2e7732dd-profile_image-70x70.jpeg'
            },
            {
                id: 18,
                name: 'ilyarnn',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9670512f-502b-410a-b833-61fa65d319e4-profile_image-70x70.png'  
            },
            {
                id: 19,
                name: 'yagamasta',
                position: 'SUB DE MUSAS',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c2fe78f0-6f73-41a4-af2d-a85d8d83c45c-profile_image-70x70.png'
            },
            {
                id: 20,
                name: 'ManoJhOn1233',
                position: 'versátil',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/87568210-b27f-4969-8bff-3d311a144bf7-profile_image-70x70.png'
            },
            {
                id: 21,
                name: 'bisavolt',
                position: 'versátil',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/395808b6-d109-405e-a409-746936d47403-profile_image-70x70.png'
            },
            {
                id: 22,
                name: 'Thorgaut',
                position: 'ativo',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bf5040a9-26c7-4449-be18-ec01504abb38-profile_image-70x70.png'
            },
            {
                id: 23,
                name: 'giovanaar_',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e3660137-585f-42c0-85aa-967951bd5c21-profile_image-70x70.png'
            },
            {
                id: 24,
                name: 'sirci88',
                position: '????',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/71c0ca45-c054-4dab-a55a-ef55467e2493-profile_image-70x70.jpeg'
            },
            {
                id: 25,
                name: 'gustav0_a',
                position: 'passivo',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b6edcf85-cf39-416f-8b78-1d2b667814b5-profile_image-70x70.jpeg'
            },
            {
                id: 26,
                name: 'NillahConceicao_SilvaVOLT',
                position: 'ativo', 
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c6d055a4-8ed3-4f9b-9bd0-4a3be21e7c7f-profile_image-70x70.jpeg'
            },
            {
                id: 27,
                name: 'chocotonyyyy',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/33b92082-529c-4063-94ed-eea4a0641be0-profile_image-70x70.png'
            },
            {
                id: 28,
                name: 'mdmlivia_mulambo',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ea7790e8-75a6-4c8f-9711-42263e6e68be-profile_image-70x70.jpeg'
            },
            {
                id: 29,
                name: 'Davibardoo',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/091ba194-c6df-450d-8d6a-daa5bd3b7032-profile_image-70x70.png'
            },
            {
                id: 30,
                name: 'joseicaro2001',
                position: 'versatil',
                img: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-70x70.png'
            },
            {
                id: 31,
                name: 'luchaosx',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6585ed01-21f5-45ce-a0af-65e150240a26-profile_image-70x70.png'
            },
            {
                id: 32,
                name: 'LINUXtips',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/10db8bbd-7aec-4ced-9571-1f349544fea9-profile_image-70x70.png'
            },
            {
                id: 33,
                name: 'mortinholol',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a022a491-c0f4-4443-a18c-f4c952baae51-profile_image-70x70.jpeg'    
            },
            {
                id: 34,
                name: 'leit1nho',
                position: 'versatil',
                img: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-70x70.png'
            },
            {
                id: 35,
                name: 'wevertonslima',
                position: 'hetero',
                img: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-70x70.png'
            },
            {
                id: 36,
                name: 'caanelajr',
                position: 'passivo',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ec3becf5-2d70-4e66-b550-06a130ee05f4-profile_image-70x70.jpeg'
            },
            {
                id: 37,
                name: 'ruancamara',
                position: 'passivo',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/139623c2-e87f-41fd-9d1a-2d51d00f66f0-profile_image-70x70.png'
            },
            {
                id: 38,
                name: 'braaaaga',
                position: 'a definir',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e7ccaeba-9ccf-4ceb-a0d4-b832c2d0e0cc-profile_image-70x70.png'
            },
            {
                id: 39,
                name: 'hiroodrop',
                position: 'versátil',
                img: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png'
            },
            {
                id: 40,
                name: 'chabrinoca',
                position: 'a definir',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/95073c39-a7de-4235-9e1f-299e3c0dfbc3-profile_image-70x70.jpeg'
            },
            {
                id: 41,
                name: 'Lurigore',
                position: '⭐ SUB ⭐',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e505d44f-def0-4a67-b8e6-5c11457d6fbe-profile_image-70x70.png'
            },
            {
                id: 42,
                name: 'sorakavagaba',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a1bada85-e08b-4941-ac9d-4b5f898f90d7-profile_image-70x70.png'
            },
            {
                id: 43,
                name: 'skeletodan1057',
                position: 'viewer',
                img:'https://static-cdn.jtvnw.net/jtv_user_pictures/2110edfe-cb87-40ce-93bc-67cf9bbfc56c-profile_image-70x70.jpeg'
            },
            {
                id: 44,
                name: 'microplastico_da_veronika:',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e18348d3-432f-4f5b-9ab0-89acd11ecc63-profile_image-70x70.png'
            },
            {
                id: 45,
                name: 'marcos3312',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-70x70.png'
            },
            {
                id: 46,
                name: 'fossoro',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/552ee5c1-ab39-4bcc-9b2c-d800b40c741a-profile_image-70x70.png'
            },
            {
                id: 47,
                name: 'aninhachoices',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/025b4c04-51bc-4e6a-980b-54fcce7727c6-profile_image-70x70.png'
            },
            {
                id: 48,
                name: 'Heyttor',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8ac3e939-5901-403f-821d-d4b7cf7722f5-profile_image-70x70.png'
            },
            {
                id: 49,
                name: 'ryryegoista',
                position: 'viewer',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ad8af822-c5d5-42d4-97e0-3a130087e9ca-profile_image-70x70.jpeg'
            },
            {
                id: 50,
                name: 'RaissaNatali',
                position: '⭐ SUB ⭐',
                img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/74d4eea4-cfdb-4223-9cc2-1f844250b970-profile_image-70x70.png'
            }
        
          ])

          const updateViewer = function(id, newName, newPosition, newImg){
            
            
            let viewersCopy = viewers.map(
                (viewer)=>{
                    if(id === viewer.id){
                        return {
                            id: id,
                            name: newName,
                            position: newPosition,
                            img: newImg
                        }
                    }
                return viewer
                }
            )
                setViewers(viewersCopy)
        }

        function newViewer(name, position, img){
            
            const viewer = {
                id: uuidv4(),
                name: name,
                position:position,
                img: img
            }
            setViewers([...viewers, viewer])
        }
    return (
        <ol>
            <div
                style = {{display: 'flex', justifyContent: 'center'}}
            >
                <AddViewer newViewer = {newViewer}/>
            </div>
            
            <div
                className="flex flex-wrap"
            >
                {
                
                viewers.map(
                    (viewer)=>{
                        const editViewer = <EditViewer
                            id = {viewer.id} 
                            name={viewer.name} 
                            position={viewer.position} 
                            img={viewer.img} 
                            updateViewer={updateViewer}
                        />
                    return <Viewer
                        key={viewer.id}
                        id = {viewer.id}
                        name ={viewer.name}
                        position = {viewer.position}
                        img = {viewer.img}
                        editViewer={editViewer}
                    />
                }
                )}
            </div>
            
        </ol>
    )
}
