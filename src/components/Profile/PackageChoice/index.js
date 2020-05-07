import React from 'react'
import { Header, Icon, Form, Divider, Container, Grid, Button } from 'semantic-ui-react'
import "./package.scss"
import { useDropZone } from "react-dropzone";
const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const index = props => {
    const { packageChoice } = props.values;
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

    return (

        <Container>
            <div className="form-box">
                <Header as='h2' className="m-3">
                    <Icon name='settings' />
                    <Header.Content>
                        Account Settings
                        <Header.Subheader>Manage your prefered role</Header.Subheader>
                    </Header.Content>
                </Header>
                <Divider />
                <Form className="p-selection">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </div>
                    <Button.Group floated="left">
                        <Button onClick={props.nextStep} color="green">Save and Continue</Button>
                    </Button.Group>
                    <Button.Group floated="right">

                        <Button onClick={props.prevStep} color="red" animated>
                            <Button.Content visible>Go back</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow left' />
                            </Button.Content>
                        </Button>
                    </Button.Group>
                </Form>
            </div>
        </Container>
    )
}

export default index
