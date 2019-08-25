interface ITag {
  readonly name: string;
  readonly color: string;
}

export interface IIssueCardMock {
  readonly title: string;
  readonly subTitle: string;
  readonly description: string;
  readonly ProfilePictureUrl?: string;
  readonly tags: ITag[];
}

const IssueCardsMock: IIssueCardMock[] = [
  {
    title: "Throw error while generating type and mutation base on mongoose schema",
    subTitle: "#111: opened by John Doe",
    description:
      "Description text At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    tags: [{ name: "actionpack", color: "#CB4CB6" }, { name: "react", color: "#2E7DFB" }]
  },
  {
    title: "Throw error while generating type and mutation base on mongoose schema",
    subTitle: "#111: opened by John Doe",
    description:
      "Description text At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    tags: [{ name: "actionpack", color: "#CB4CB6" }, { name: "react", color: "#2E7DFB" }]
  },
  {
    title: "Throw error while generating type and mutation base on mongoose schema",
    subTitle: "#111: opened by John Doe",
    description:
      "Description text At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    tags: [{ name: "actionpack", color: "#CB4CB6" }, { name: "react", color: "#2E7DFB" }]
  }
];

export default IssueCardsMock;
