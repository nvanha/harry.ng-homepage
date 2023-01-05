export const DogSpinner = () => <p>Loading</p>;

export const DogContainer = ({ children, customRef }) => (
  <div ref={customRef} className="voxel-dog">
    {children}
  </div>
);
