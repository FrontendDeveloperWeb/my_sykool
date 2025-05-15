const AttributeItem = ({ iconSrc, label, value }) => (
    <div className="attributes-items d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
            <img src={iconSrc} alt="" />
            <p className="font-14 color-light ms-2">{label}</p>
        </div>
        <p className="color-black">{value}</p>
    </div>
);

export default AttributeItem