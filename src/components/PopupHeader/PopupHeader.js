import { Link, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup } from 'semantic-ui-react';
import MediaQuery from 'components/MediaQuery';
import {useContext} from "react";
import {Context} from "../App/context";

const LinkContainer = (props) => {
    return (
        <Link to={props.href}><p>{props.title}</p></Link>
    )
}

const PopupHeader = () => {
    const {isOnSlider} = useContext(Context)
    const Links = [
        {href: '/cloud-evolve',title: 'Cloud Evolve',},
        {href: '/cloud-governance', title: 'Cloud Governance',},
        {href: '/cloud-migration', title: 'Cloud Migration',},
        {href: '/cloud-solutions-architecture', title: 'Cloud Solutions Architecture',},
        {href: '/cloud-ai-and-analytics', title: 'Cloud AI & Analytics',},
        {href: '/smart-devops', title: 'Smart DevOps',},
        {href: '/smart-infractructure', title: 'Smart Infrastructure',},
        {href: '/master-msp', title: 'Master MSP',},
    ]
    const NavLinks = Links.map(link => <LinkContainer href={link.href} title={link.title} />)
    return (
        <Popup
        content={
            <PopupBox isOnSlider={isOnSlider}>
                <MediaQuery device={'mobile'}>
                    <Link to="/"><p>Back</p></Link>
                </MediaQuery>
                <Link to="/cloud-evolve"><p>Cloud Evolve</p></Link>
                <Link to="/cloud-governance"><p>Cloud Governance</p></Link>
                <Link to="/cloud-migration"><p>Cloud Migration</p></Link>
                <Link to="/cloud-solutions-architecture"><p>Cloud Solutions Architecture</p></Link>
                <Link to="/cloud-ai-and-analytics"><p>Cloud AI & Analytics</p></Link>
                <Link to="/smart-devops"><p>Smart DevOps</p></Link>
                <Link to="/smart-infractructure"><p>Smart Infrastructure</p></Link>
                <Link to="/master-msp"><p>Master MSP</p></Link>
            </PopupBox>
        }
        on={['focus', 'hover']}
        position="bottom left"
        pinned
        hoverable
        style={{ zIndex: '5' }}
        trigger={<PopButton>Services</PopButton>}
    />
    )

}
export default PopupHeader;

