function FruitList(){
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

    return (
        <div>
            <h3>Fruit List</h3>
            <ul>
                {fruits.map((fruit,index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default FruitList;