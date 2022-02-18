type QueryParams = {[identifier: string]: string | number | boolean};

export class BaseRepositoryRest{
  private static async makeCall<R, S>(url: string, method: string, requestData?: R) : Promise<S>{
    const response = await fetch(
      url,
      {
        method: method,
        body: JSON.stringify(requestData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(localStorage.getItem("user") && {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          }),
        },
      }
    );
    if (response.status === 200){
      return await response.json();
    }
    if (response.status === 401){
      throw new Error("Unauthorized")
    }
    throw new Error("hz chto za error, tchezno");
  }

  private static encodeQueryData(data: {[identifier: string]: string | number | boolean}) {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
  }

  protected async get<Q extends QueryParams, S>(url: string, queryParams?: Q): Promise<S>{
    const urlWithQuery = queryParams ? `${url}/?${BaseRepositoryRest.encodeQueryData(queryParams)}` : url;
    return await BaseRepositoryRest.makeCall<null, S>(urlWithQuery, "GET");
  }

  protected async post<R, S>(url: string, requestData: R): Promise<S>{
    return await BaseRepositoryRest.makeCall<R, S>(url, "POST", requestData);
  }

  protected async patch<R, S>(url:string, requestData: R): Promise<S>{
    return await BaseRepositoryRest.makeCall<R, S>(url, "PATCH", requestData);
  }
}
