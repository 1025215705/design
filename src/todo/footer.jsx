import '../asset/style/footer.css';
export default{
    data(){
        return {
            author:'ssss'
        }
    },
    render(){
        return (
            <div id="footer">
            <span>Wirtter by {this.author}</span>
            </div>
        )
    }
}