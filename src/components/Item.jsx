import '../css/styles.css'
export default function Item({item}){
    return <div>
        <div className='item_itemContianer'>
            <div className='imageContianer'><img className='image_imageItem' src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image} alt=""/></div>
            <div className='nameContianer'>
                <div className='name_name' >{item.name}</div>
                <div className='name_amount'>{item.amount} {item.unit}</div>
            </div>

        </div>
    </div>
}