import React from 'react';

function InStockOutStock({ showOutOfStock, setShowOutOfStock }) {
	return (
		<div>
			<button
				onClick={() => setShowOutOfStock((prev) => !prev)}
				style={{
					padding: '8px 16px',
					border: '2px solid #0066cc',
					borderRadius: '20px',
					background: showOutOfStock ? '#0066cc' : 'white',
					color: showOutOfStock ? 'white' : '#0066cc',
					cursor: 'pointer',
					fontWeight: 'bold',
					marginBottom: '16px'
				}}
			>
				{showOutOfStock ? 'Show In Stock Only' : 'Show Out of Stock'}
			</button>
		</div>
	);
}

export default InStockOutStock;
