import {BiTrash} from 'react-icons/bi';

export default function AddInfo({listItem,onDelete}){
    return(
        <li>
            <dl>
                <dt>{listItem.petName}</dt>
                <dd>
                    <dfn>{listItem.ownerName}</dfn>
                </dd>
                <dd>{listItem.aptNotes}</dd>
                <dd>{listItem.aptDate}</dd>
            </dl>
            <button type="button" onClick={()=>onDelete(listItem.id)}>
                <BiTrash />
            </button>
        </li>
    )
}