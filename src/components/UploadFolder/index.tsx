import React from 'react'
import Dropzone from 'react-dropzone'
import API from '../../Api/Api'

// interface P {}
// interface S {}
{/* <P & WithStyles<Styles> > */}
export default class UploadFolder extends React.PureComponent{
    //public static Display = withStyles(styles as any)(UploadFolder) as React.ComponentType<P>

    handleDrop = async (acceptedFiles) => {
        // console.log(acceptedFiles)
        await API.post(`/upload-folder`, acceptedFiles).then(res => {
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