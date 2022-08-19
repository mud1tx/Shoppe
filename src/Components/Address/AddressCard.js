import React, { useEffect } from "react";
import classes from "./AddressCard.module.css";
import { useSelectAddress } from "../../contexts/SelectedAddressContext";
import { MdDelete } from "react-icons/md";
import { useAddress } from "../../contexts/AddressContext";

const AddressCard = (props) => {
  const { addressState, addressdispatch } = useAddress();
  const { selectAddressState, selectAddressdispatch } = useSelectAddress();
  const { id, city, country, mobile, name, state, street, zipcode } =
    props.data;
  useEffect(() => {
    let i = 0;
    for (i = 0; i < addressState.address.length; i++) {
      if (
        selectAddressState.selectedAddress !== null &&
        addressState.address[i].id === selectAddressState.selectedAddress.id
      ) {
        break;
      }
    }
    if (i === addressState.address.length) {
      selectAddressdispatch({
        type: "REMOVE_ADDRESS",
        payload: null,
      });
    }
  }, [addressState.address || addressState.address.length === 0]);

  return (
    <div className={classes.addressesContainer}>
      <input
        type="radio"
        name="address"
        checked={
          selectAddressState.selectedAddress !== null &&
          selectAddressState.selectedAddress.id === id
        }
        onChange={() => {
          selectAddressdispatch({
            type: "SELECT_ADDRESS",
            payload: props.data,
          });
        }}
      />
      <label className={classes.addressData}>
        <p>
          <span>{name}</span>
        </p>
        <p>{street}</p>
        <p>
          {city} - {zipcode}
        </p>
        <p>
          {state}, {country}
        </p>
        <p>{mobile}</p>
      </label>
      <div className={classes.deleteBtnContainer}>
        <MdDelete
          className={classes.deleteBtn}
          onClick={() => {
            if (addressState.address.length === 1) {
              selectAddressdispatch({
                type: "REMOVE_ADDRESS",
                payload: null,
              });
            }
            addressdispatch({
              type: "REMOVE_ADDRESS",
              payload: props.data.id,
            });
          }}
        />
      </div>
    </div>
  );
};

export default AddressCard;
