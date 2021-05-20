import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export const PatientListItemSkeleton = () => {
  return (
    <tr>
      <td>
        <Skeleton></Skeleton>
      </td>
      <td>
        <Skeleton></Skeleton>
      </td>
      <td>
        <Skeleton></Skeleton>
      </td>
    </tr>
  );
};

const PatientListItem = ({ p, deleteOne }) => {
  return (
    <tr>
      <td>{p.name}</td>
      <td>{p.age}</td>
      <td>
        <Link to={`/patients/${p.id}/`}>
          <button className="ui button primary mini basic">See</button>
        </Link>
        <button
          className="ui button negative mini basic"
          onClick={() => deleteOne(p.id)}
        >
          Delete
        </button>
        <Link to={`/patients/${p.id}/edit`}>
          <button className="ui button positive mini basic">Edit</button>
        </Link>
      </td>
    </tr>
  );
};

export default PatientListItem;
