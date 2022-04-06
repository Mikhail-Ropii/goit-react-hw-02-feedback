import { Title } from "./FeedbackStat.styled.js";


export const Section = ({title, children}) => {
        return (<>
            <Title>{title}</Title>
            {children}
            </>
        )
}