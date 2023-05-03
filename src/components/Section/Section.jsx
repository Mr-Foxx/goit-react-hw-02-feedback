
import { SectionBox ,Title} from "../Section/Section.styled";
import PropTypes from 'prop-types';

export const Section=({title,children})=>{

    return(
        <SectionBox>
            <Title>{title}</Title>
            {children}
        </SectionBox>
        
    )
}

Section.propTypes={
    title:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired,
}
