import { useState } from "react";

function BankForm() {
    const [formData, setFormData] = useState({
        pan: '',
        dob: '',
        gender: '',
        bankName: '',
        accountNumber: '',
        ifsc: '',
        upiPrefix: '',
        upiSuffix: '@okaxis',
        ipoLots: 1,
        ipoPrice: 100
    });

    const bankIfscMapping = {
        "HDFC Bank Limited": "HDFC",
        "ICICI Bank Limited": "ICIC",
        "Axis Bank Limited": "UTIB",
        "State Bank of India": "SBIN"
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let updatedData = { ...formData, [name]: value };

        if (name === 'pan') {
            updatedData.pan = value.toUpperCase();
        }

      if (name === 'bankName') {
            updatedData.ifsc = bankIfscMapping[value] || '';
        }

       if (name === 'ifsc') {
            updatedData.ifsc = value.toUpperCase();
        }

        setFormData(updatedData);
    };

    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    const lotSize = 13;
    const maxLots = 15;
    const minPrice = 100;
    const maxPrice = 110;

    const isIfscValid = ifscRegex.test(formData.ifsc);
    const isAccountValid = formData.accountNumber.length >= 9 && formData.accountNumber.length <= 18;
    const isPanValid = formData.pan.length === 10;
    
    const totalShares = formData.ipoLots * lotSize;
    const totalValue = totalShares * formData.ipoPrice;

    const isPriceValid = formData.ipoPrice >= minPrice && formData.ipoPrice <= maxPrice;
    const isLotValid = formData.ipoLots >= 1 && formData.ipoLots <= maxLots;

    return (
        <div>
            <h3>Bank Details Form</h3>

            <label>PAN CARD: </label>
            <input name="pan" value={formData.pan} onChange={handleInputChange} maxLength="10" />
            <br /><br />

            <label>DOB: </label>
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
            <br /><br />

            <label>Gender: </label>
            <select name="gender" value={formData.gender} onChange={handleInputChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <br /><br />

            <label>Bank Name: </label>
            <select name="bankName" value={formData.bankName} onChange={handleInputChange}>
                <option value="">Select Bank</option>
                <option value="HDFC Bank Limited">HDFC</option>
                <option value="ICICI Bank Limited">ICICI</option>
                <option value="Axis Bank Limited">Axis</option>
                <option value="State Bank of India">SBI</option>
            </select>
            <br /><br />

            <label>IFSC Code: </label>
            <input
                name="ifsc"
                value={formData.ifsc}
                onChange={handleInputChange}
                maxLength="11"
                placeholder="e.g. HDFC0001234"
            />
            {formData.ifsc.length > 0 && !isIfscValid && (
                <span> (Invalid Format: 4 letters, 0, then 6 chars)</span>
            )}
            <br /><br />

            <label>Account Number: </label>
            <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} />
            <br /><br />

            <label>UPI ID: </label>
            <input placeholder="yourname" name="upiPrefix" value={formData.upiPrefix} onChange={handleInputChange} />
            <select name="upiSuffix" value={formData.upiSuffix} onChange={handleInputChange}>
                <option value="@okaxis">@okaxis</option>
                <option value="@okhdfc">@okhdfc</option>
                <option value="@okicici">@okicici</option>
                <option value="@oksbi">@oksbi</option>
            </select>
            <p>Your Final UPI: <strong>{formData.upiPrefix}{formData.upiSuffix}</strong></p>

            <hr />
            <h3>IPO Section</h3>
            <p>Constraints: Price 100 - 110 | Lot Size: {lotSize} | Max Lots: {maxLots}</p>
            
            <label>Number of Lots: </label>
            <input type="number" name="ipoLots" value={formData.ipoLots} onChange={handleInputChange} />
            <br /><br />

            <label>Bid Price: </label>
            <input type="number" name="ipoPrice" value={formData.ipoPrice} onChange={handleInputChange} />
            
            <p>Total Shares: {totalShares}</p>
            <p>Total Value: {totalValue}</p>
            
            {!isPriceValid && <p style={{color: 'red'}}>Invalid Price (100-110)</p>}
            {!isLotValid && <p style={{color: 'red'}}>Invalid Lots (Max 15)</p>}

            <button disabled={!isAccountValid || !isPanValid || !isIfscValid || !isPriceValid || !isLotValid}>
                Submit
            </button>
        </div>
    );
}

export default BankForm;