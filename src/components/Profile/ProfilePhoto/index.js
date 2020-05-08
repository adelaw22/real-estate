import React, { useState, useEffect, useMemo } from 'react'
import { Header, Icon, Form, Divider, Container, Message, Button } from 'semantic-ui-react'
import "./package.scss";
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '20vh',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    margin: '2em 0'
};


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    marginBottom: 8,
    marginRight: 8,
    width: 150,
    height: 150,
    borderRadius: 50,
    boxSizing: 'border-box',
    justifyContent: 'center'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
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



function Index(props) {
    const { packageChoice } = props.values;
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const maxSize = 1048576;

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        rejectedFiles,
        open
    } = useDropzone({
        accept: 'image/jpeg, image/png',
        noClick: true,
        noKeyboard: true,
        minSize: 0,
        maxSize,
        onDrop: acceptedFiles => {
            if (acceptedFiles.length === 0) {
                setError('Please select a profile image')
            } else if (acceptedFiles.length > 1) {
                setError('You can only have one profile..')
            } else {
                setFiles(acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            }
        }
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files])

    return (

        <Container>
            <div className="form-box">
                <Header as='h2' className="m-3">
                    <Icon name='settings' />
                    <Header.Content>
                        Profile Settings
                        <Header.Subheader>Add your profile</Header.Subheader>
                    </Header.Content>
                </Header>
                <Divider />
                {
                    error && isFileTooLarge &&
                    <Message
                        warning
                        header='Sorry we cant upload.'
                        content={error}
                    />
                }

                <div className="container">
                    <div {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        {!isDragActive && 'Click here or drop a file to upload!'}
                        {isDragActive && !isDragReject && "Drop it like it's hot!"}
                        {isDragReject && "File type not accepted, sorry!"}
                        {isFileTooLarge && (
                            <div className="text-danger mt-2">
                                File is too large.
                            </div>
                        )}
                        <Button color="blue" icon labelPosition='right' onClick={open} className="uploadBtn">
                            Upload
                            <Icon name='file outline' />
                        </Button>
                    </div>
                </div>

                <aside style={thumbsContainer}>
                    {thumbs}
                </aside>

                <Button.Group floated="left">
                    <Button onClick={props.nextStep} color="green">Next</Button>
                </Button.Group>
                <Button.Group floated="right">

                    <Button onClick={props.prevStep} color="red" animated>
                        <Button.Content visible>Previous</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                </Button.Group>
            </div>
        </Container>
    )
}

export default Index
