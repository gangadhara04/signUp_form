document.addEventListener('DOMContentLoaded', function () {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const statesData = {
        "andhra_pradesh": "Andhra Pradesh",
        "telangana": "Telangana",
        "karnataka": "Karnataka",
        "tamil_nadu": "Tamil Nadu",
        "maharashtra": "Maharashtra",
        "kerala": "Kerala",
        "gujarat": "Gujarat",
        "rajasthan": "Rajasthan",
        "punjab": "Punjab",
        "haryana": "Haryana"
    };
    const districtsData = {
        "andhra_pradesh": [
            "Vishakhapatnam",
            "Guntur",
            "Vijayawada",
            "Nellore",
            "Kurnool",
            "Rajahmundry",
            "Tirupati",
            "Kadapa",
            "Anantapur",
            "Eluru"
        ],
        "telangana": [
            "Hyderabad",
            "Warangal",
            "Nizamabad",
            "Karimnagar",
            "Khammam",
            "Ramagundam",
            "Mahbubnagar",
            "Nalgonda",
            "Suryapet",
            "Kothagudem"
        ],
        "karnataka": [
            "Bangalore",
            "Chickmagalore",
            "Mysore",
            "Hubli",
            "Mangalore",
            "Belgaum",
            "Gulbarga",
            "Davanagere",
            "Bijapur",
            "Shimoga",
            "Tumkur",

        ],
        "tamil_nadu": [
            "Chennai",
            "Coimbatore",
            "Madurai",
            "Tiruchirappalli",
            "Salem",
            "Tirunelveli",
            "Thoothukudi",
            "Nagercoil",
            "Thanjavur",
            "Vellore"
        ],
        "maharashtra": [
            "Mumbai",
            "Pune",
            "Nagpur",
            "Thane",
            "Nashik",
            "Aurangabad",
            "Solapur",
            "Amravati",
            "Kolhapur",
            "Aurangabad"
        ],
        "kerala": [
            "Thiruvananthapuram",
            "Kochi",
            "Kozhikode",
            "Kollam",
            "Thrissur",
            "Alappuzha",
            "Kottayam",
            "Palakkad",
            "Malappuram",
            "Pathanamthitta"
        ],
        "gujarat": [
            "Ahmedabad",
            "Surat",
            "Vadodara",
            "Rajkot",
            "Bhavnagar",
            "Jamnagar",
            "Junagadh",
            "Gandhinagar",
            "Bharuch",
            "Anand"
        ],
        "rajasthan": [
            "Jaipur",
            "Jodhpur",
            "Kota",
            "Bikaner",
            "Ajmer",
            "Udaipur",
            "Sikar",
            "Barmer",
            "Bhilwara",
            "Alwar"
        ],
        "punjab": [
            "Ludhiana",
            "Amritsar",
            "Jalandhar",
            "Patiala",
            "Bathinda",
            "Hoshiarpur",
            "Pathankot",
            "Moga",
            "Firozpur",
            "Sangrur"
        ],
        "haryana": [
            "Faridabad",
            "Gurgaon",
            "Panipat",
            "Ambala",
            "Yamunanagar",
            "Rohtak",
            "Hisar",
            "Karnal",
            "Sonipat",
            "Panchkula"
        ]
    };

    Object.keys(statesData).forEach(stateKey => {

        const option = document.createElement('option');
        option.value = stateKey;
        option.textContent = statesData[stateKey];
        stateSelect.appendChild(option);
    });

    M.FormSelect.init(stateSelect);
    stateSelect.addEventListener('change', function () {
        const selectedState = stateSelect.value;
        districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';

        if (selectedState && selectedState in districtsData) {
            districtsData[selectedState].forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
        M.FormSelect.init(districtSelect);
    });
});