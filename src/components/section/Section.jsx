import { Title } from "../feedbackOptions/FeedbackStat.styled.js";


export const Section = ({title, children}) => {
        return (<>
            <Title>{title}</Title>
            {children}
            </>
        )
}