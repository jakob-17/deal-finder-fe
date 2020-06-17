import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputUrl: '',
            tableContent: []
        }
    }

    clickedSignOut = () => {
        this.props.onRouteChange('signin');
    }

    handleUrlChange = (event) => {
        this.setState({ inputUrl: event.target.value })
    }

    // handlePriceChange = (event) => {
    //     this.setState({ inputPrice: event.target.value })
    // }

    dealSubmitted = () => {
        fetch('https://localhost:44379/api/PriceListings', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Url: this.state.inputUrl,
            })
        })
            .then(response => response.json())
            .then(listing => {
                if (listing.id) {
                    let items = this.state.tableContent;
                    items.push({
                        id: listing.id,
                        url: listing.url,
                        title: listing.itemTitle,
                        price: listing.itemPrice
                    });
                    this.setState({
                        inputUrl: '',
                        tableContent: items
                    })
                }
            })
            .catch(error => console.log(error))
    }

    deleteListing = (id) => {
        fetch('https://localhost:44379/api/PriceListings/' + id, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => {
                let items = this.state.tableContent;
                let filteredContent = items.filter(item => item.id !== id);
                this.setState({
                    inputUrl: '',
                    tableContent: filteredContent
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <main className="home">
                <h1>Price Finder: Sweetwater</h1>
                <div>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Deal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Update table elements here */}
                            {this.state.tableContent.map((item) =>
                                <tr key={item.id}>
                                    <td className="title">{item.title}</td>
                                    <td className="price">{item.price}</td>
                                    <td><button onClick={() => this.deleteListing(item.id)}>Remove</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <br />
                    <input type="text" id="deal-url" className="input-reset br2 w-third mw-100 white b pv2 ph3 
                        bg-white-30 hover-bg-white-70 hover-gray outline-0 bn" onChange={this.handleUrlChange} />
                    {/*<input type="text" id="deal-price" onChange={this.handlePriceChange} />*/}
                    <button onClick={this.dealSubmitted}
                        className="f5 grow no-underline ba br2 bw1 ph3 pv2 mb2 dib near-black">Submit</button>
                    <br />
                    <br />
                    <button onClick={this.clickedSignOut}
                        className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib near-black">Sign Out</button>
                </div>
            </main>
        );
    }
}

export default Home;