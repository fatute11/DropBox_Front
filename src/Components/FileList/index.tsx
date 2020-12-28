import React from 'react';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import { FileIcon, defaultStyles } from 'react-file-icon';
import { Files } from "../../Interfaces/files"
import styles, { Styles } from './styles';
import API from '../../Api/Api'
import { 
    withStyles,
    WithStyles,
    Theme, 
    createStyles, 
    Grid, 
    Table, 
    TableHead, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow, 
    Paper,  
} from '@material-ui/core';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

interface P { }
interface S { files:Array<Files> }

export default class FileList extends React.PureComponent<P & WithStyles<Styles>, S>{

    public state: Readonly<S> = { files: [] };
    public static Display = withStyles(styles as any)(FileList) as React.ComponentType<P>

    componentDidMount = async () => {

        const data = await API
        .get('/file-list',{withCredentials: true})
        .then(response => {return response.data})

        data.forEach(element => {
            console.log(element)
            if(element.originalname){
                let splitEl = element.originalname.split("/")

                if(!this.state.files.includes(splitEl[0])){
                    this.setState({
                        files: [...this.state.files, {title: splitEl[0]}]
                    })
                }
            }else{
                let fileExtension = ""
                let size: string|number = ""
                if (element.mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
                    fileExtension = "docx"
                }
                if (element.mimeType === "application/pdf"){
                    fileExtension = "pdf"
                    
                }
                size = Math.round(parseInt(element.size) / 1000)
                this.setState({
                    files: [...this.state.files,  {title: element.title, extension: fileExtension, size: size.toString()}]
                })
            }
        });  
    }

    renderSwitch(file) {
        switch(file.extension) {
            case 'docx':
                return <FileIcon extension={file.extension} {...defaultStyles.docx} />;
            case 'pdf':
                return <FileIcon extension={file.extension} {...defaultStyles.pdf} />;
            case 'php':
                return <FileIcon extension={file.extension} {...defaultStyles.php} />;
            case 'js':
                return <FileIcon extension={file.extension} {...defaultStyles.js} />;
            default:
                return <FileIcon extension={file.extension} {...defaultStyles.docx} />;
        }
    }

    render() {
        const { files } = this.state;
        const { classes } = this.props;
        
        return(
            <Grid>
                <h1>Mes fichiers</h1>

                <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell>Nom du fichier</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {files.map((file) => (
                        <StyledTableRow key={file.title}>
                            <StyledTableCell component="th" scope="row">
                                {file.extension ? (
                                    this.renderSwitch(file)
                                ) : (
                                    <FolderOpenTwoToneIcon fontSize="large" color="primary"/>
                                )}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">{file.title}</StyledTableCell>
                        {/* <StyledTableCell align="right">{file.title}</StyledTableCell> */}
                        <StyledTableCell align="right">{file.size} ko</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Grid>
        )
    }
}