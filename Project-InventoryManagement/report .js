import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './report.css';
import Sidebar from './hp';
import Side from './side';


const Report = () => {
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReportData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await Axios.get('http://localhost:3000/sales'); 
                setReportData(response.data);
            } catch (err) {
                setError("Failed to load report data.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchReportData();
    }, []);

    if (loading) {
        return <p>Loading report data...</p>;
    }

    if (error) {
        return <p>{error}</p>; 
    }

    if (!reportData) {
        return <p>No report data available.</p>;
    }

    return (
        <div className="report-container">
            <Side/>
            <h1 className="report-title">Sales Report</h1>
            <div className="summary">
                <p>Total Sales: {reportData.totalSales || 'N/A'}</p>
                <p>Total Revenue: ${reportData.totalRevenue || 'N/A'}</p>
                <p>Total Products Sold: {reportData.totalProductsSold || 'N/A'}</p>
            </div>

            <h2>Inventory Status</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quantity in Stock</th>
                        <th>Quantity Sold</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.inventoryStatus.map(product => (
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.productName}</td>
                            <td>{product.quantityInStock}</td>
                            <td>{product.quantitySold}</td>
                            <td>{product.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Sales Breakdown</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Quantity Sold</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.salesBreakdown.map(sale => (
                        <tr key={sale.date}>
                            <td>{sale.date}</td>
                            <td>{sale.quantitySold}</td>
                            <td>${sale.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="top-selling">
                <h2>Top Selling Products</h2>
                {reportData.topSellingProducts.map(product => (
                    <div className="top-selling-item" key={product.productId}>
                        <p>{product.productName}: {product.quantitySold} sold</p>
                    </div>
                ))}
            </div>

            <div className="footer">
                <p>Report generated on {reportData.dateGenerated}</p>
            </div>
        </div>
    );
};

export default Report;
