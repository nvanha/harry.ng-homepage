import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";

import { listLikes, listViews } from "@/graphql/queries";
import { newOnUpdateLikes, newOnUpdateViews } from "@/graphql/subscriptions";

const useGetContentRealTime = (type: string, dependencies?) => {
  const [dataOnUpdate, setDataOnUpdate] = useState();
  const [resData, setResData] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const getResDataToState = async () => {
    let resTmp;
    if (type === "Like") {
      const result: any = await API.graphql(graphqlOperation(listLikes));
      resTmp = result.data.listLikes.items[0].liked;
      setIsLoading(false);
    } else if (type === "View") {
      const result: any = await API.graphql(graphqlOperation(listViews));
      resTmp = result.data.listViews.items[0].viewed;
      setIsLoading(false);
    }
    setResData(resTmp);
  };

  useEffect(() => {
    getResDataToState();
  }, [dataOnUpdate, dependencies]);

  let subscriptionOnUpdate;

  const setupSubscriptions = () => {
    subscriptionOnUpdate = API.graphql(
      graphqlOperation(type === "Like" ? newOnUpdateLikes : newOnUpdateViews)
    ).subscribe({
      next: (dataOnUpdate) => {
        setDataOnUpdate(dataOnUpdate);
      },
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setupSubscriptions();

    return () => {
      subscriptionOnUpdate.unsubscribe();
    };
  }, [dependencies]);

  return { resData, isLoading };
};

export default useGetContentRealTime;
