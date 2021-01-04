import React from 'react';
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
import API from '../../Api/Api'
import styles, { Styles } from './styles';
import { Files } from "../../Interfaces/files"
import { FileIcon, defaultStyles } from 'react-file-icon';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';

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

        const data = await API.get('/file-list',{withCredentials: true}).then(response => {return response.data})

        data.forEach(element => {
            console.log(element)
            if(element.originalname){
                let splitEl = element.originalname.split("/")

                if(!this.state.files.includes(splitEl[0])){
                    this.setState({
                        files: [...this.state.files, {_id: element._id, title: splitEl[0]}]
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
                if (element.mimeType === "text/javascript"){
                    fileExtension = "js"
                }
                if (element.mimeType === "text/php"){
                    fileExtension = "php"
                }
                size = Math.round(parseInt(element.size) / 1000)
                this.setState({
                    files: [
                        ...this.state.files,  
                        {
                            _id: element._id,
                            title: element.title, 
                            extension: fileExtension, 
                            size: size.toString(), 
                            isFavoris: element.isFavoris
                        }
                    ]
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

    handleFavorite = async (file) => {
        await API.post('/add-favorite',{file},{withCredentials: true}) .then(response => {return response.data})
    }

    renderFavorisStar(file){
        return (file.isFavoris === true) ? < StarRoundedIcon onClick={e => {this.handleFavorite(file)}}/> :  < StarBorderRoundedIcon  onClick={e => {this.handleFavorite(file)}}/>
    }

    render() {
        const { files } = this.state;
        const { classes } = this.props;
        
        return(
            <Grid>
                <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    {/* <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell>Nom du fichier</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                    {files.map((file) => (
                        <StyledTableRow key={file.title}>
                            <StyledTableCell >
                                {file.extension ? 
                                    <span>{this.renderSwitch(file)}</span>: 
                                    <span><FolderOpenTwoToneIcon fontSize="large" color="primary"/></span>
                                }
                                {file.title}
                                {this.renderFavorisStar(file)}
                            </StyledTableCell>
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