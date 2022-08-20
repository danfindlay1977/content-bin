import { Fragment } from "react";

export const FileUpload = () => {
  return (
    <Fragment>
      <section className="flex justify-center justify-items-center border-dashed  border-5 bg-[#50d71e]">
        <form encType="multipart/form-data">
          <section className="dropbox">
            <input type="file" name="video" />
          </section>
        </form>
      </section>
    </Fragment>
  );
};
