import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditViewer(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name)
  const [position, setPosition] = useState(props.position)
  const [img, setImg] = useState(props.img)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
        <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form 
                id = "editmodal" 
                className="w-full max-w-sm"
                onSubmit={(e)=>{
                    e.preventDefault()
                    console.log('Running from Edit Viewer Form')
                    console.log(props.id, name, position, img)
                    props.updateViewer(props.id, name, position, img)
                }}
            >
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-name">
                        Full Name
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-name" type="text" 
                    value={name}
                    onChange={
                        (e) => {setName(e.target.value)}
                    }
                    />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-position">
                        Position
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-position" type="text" 
                    value={position}
                    onChange={
                        (e) => {setPosition(e.target.value)}
                    }
                    />
                    
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-img">
                        Image URL
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-img" type="text" 
                    value={img}
                    onChange={
                        (e) => {setImg(e.target.value)}
                    }
                    />
                    
                    </div>
                </div>

                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <button 
            form = "editmodal"
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
            onClick={handleClose}
            >
            Update

        </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditViewer;