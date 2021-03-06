import React from 'react'
import Dropzone from 'react-dropzone'
import API from '../../Api/Api'
import AuthService from '../../services/auth.service'

// interface P {}
// interface S {}
{/* <P & WithStyles<Styles> > */}
export default class UploadFolder extends React.PureComponent{
    //public static Display = withStyles(styles as any)(UploadFolder) as React.ComponentType<P>

    handleDrop = async (acceptedFiles) => {

        let user = AuthService.getCurrentUser()
        let formData = new FormData();

        formData.append('user', user.id)
        for(let i = 0; i<acceptedFiles.length; i++) {
            formData.append('file', acceptedFiles[i])
        }
    
        await API.post(`/upload-folder`, formData, {headers: {
            'content-type': 'multipart/form-data'
        }}).then(res => {
            console.log(res);
        })
    }

    render(){
        return(
            <div>
                <Dropzone onDrop={(acceptedFiles: any) => this.handleDrop(acceptedFiles)}>
                    {({getRootProps, getInputProps}: any) => (
                        <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        </section>
                    )}
                </Dropzone>
                {/* <Button variant="contained" color="primary" size="medium" >Uploader un dossier</Button> */}
            </div>
        )
    }
}