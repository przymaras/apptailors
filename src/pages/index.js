import * as React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title={
          <>
            <strong>We</strong> design, <strong>build</strong> and launch{" "}
            <strong>Tailor Made</strong> digital
            <strong> products</strong>
          </>
        }
        shadowTitle="apptailors"
      >
        <p>Herere goes bottom navigation...</p>
      </Hero>
      <p style={{ padding: "2rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus
        eros purus, sed vestibulum lectus ullamcorper vel. Nulla lacus erat,
        vulputate quis laoreet a, pulvinar a mi. Nam lacus quam, elementum eu
        turpis sit amet, egestas posuere lacus. Pellentesque ut tincidunt nibh.
        Curabitur felis tellus, hendrerit eget porttitor non, fringilla eu
        justo. In hac habitasse platea dictumst. Aliquam elementum sem quis
        lacus pharetra rhoncus. Curabitur tincidunt sed justo non semper. Fusce
        nec mollis ante. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Maecenas porta quam enim, nec facilisis purus scelerisque vitae.
        Vivamus hendrerit aliquet enim, at mollis sapien maximus nec. Curabitur
        dictum dolor ac gravida blandit. Morbi tristique ante odio, vel mattis
        mauris ultrices a. Phasellus efficitur, sapien et gravida pulvinar, est
        ante efficitur sem, non volutpat lectus leo et diam. In accumsan lacus
        quis lacus rutrum hendrerit. Morbi ut lacus tincidunt, venenatis felis
        et, facilisis magna. Curabitur sit amet gravida lorem, commodo molestie
        augue. Maecenas venenatis dapibus sem, at commodo turpis iaculis in.
        Mauris blandit lorem in ipsum fringilla condimentum. Aenean neque nunc,
        blandit quis feugiat a, fermentum vitae urna. Vivamus eget mollis neque,
        at convallis turpis. Phasellus in vulputate quam. Donec nisl nisi,
        fringilla id lobortis sed, feugiat et tellus. Ut pharetra gravida elit a
        ultricies. Mauris congue diam sed odio aliquam mattis. In nec dictum
        augue. Phasellus commodo sagittis ultricies. Vivamus eget est laoreet,
        efficitur purus ut, sagittis purus. Sed magna urna, tempor in ex ut,
        blandit porta felis. Donec risus purus, sodales a facilisis consectetur,
        luctus a nisl.
      </p>
    </Layout>
  );
};

export default IndexPage;
