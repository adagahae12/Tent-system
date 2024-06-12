
async function LesFil(){
    const response = await fetch("teltinfo/xyKords.txt");
    const text = await response.text();

    const data = text.split("\n").map(line => {
        const [x, y, r] = line.split(',').map(Number);
        return { x, y, r };
    });

    // Log each object to the console
    data.forEach(obj => console.log(obj));

    return data;

}

export default LesFil
