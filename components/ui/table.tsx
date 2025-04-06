import * as React from "react";
import { cn } from "@/lib/utils";

// Root Table
function Table({ className, children, ...props }: React.HTMLProps<HTMLTableElement>) {
  return (
    <table className={cn("min-w-full table-auto border-collapse", className)} {...props}>
      {children}
    </table>
  );
}

// Table Head (<thead>)
function TableHead({ className, children, ...props }: React.HTMLProps<HTMLTableSectionElement>) {
  return (
    <thead className={cn("bg-gray-100 text-sm font-medium", className)} {...props}>
      {children}
    </thead>
  );
}

// Table Header Cell (<th>)
function TableHeader({
  className,
  children,
  align = "left",
  ...props
}: React.HTMLProps<HTMLTableCellElement> & { align?: "left" | "center" | "right" }) {
  return (
    <th
      className={cn(
        "px-4 py-2 text-sm font-semibold",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}

// Table Body
function TableBody({ children, ...props }: React.HTMLProps<HTMLTableSectionElement>) {
  return (
    <tbody className="text-sm" {...props}>
      {children}
    </tbody>
  );
}

// Table Row
function TableRow({ className, children, ...props }: React.HTMLProps<HTMLTableRowElement>) {
  return (
    <tr className={cn("border-t", className)} {...props}>
      {children}
    </tr>
  );
}

// Table Cell (<td>)
function TableCell({
  className,
  children,
  align = "left",
  ...props
}: React.HTMLProps<HTMLTableCellElement> & { align?: "left" | "center" | "right" }) {
  return (
    <td
      className={cn(
        "px-4 py-2 text-sm",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}

export { Table, TableHead, TableHeader, TableBody, TableRow, TableCell };


/*
import * as React from "react";
import { cn } from "@/lib/utils";

// Table Root Component
function Table({ className, children, ...props }: React.HTMLProps<HTMLTableElement>) {
  return (
    <table className={cn("min-w-full table-auto border-collapse", className)} {...props}>
      {children}
    </table>
  );
}

function TableHead({ className, children, ...props }: React.HTMLProps<HTMLTableSectionElement>) {
    return (
      <thead className={cn("bg-gray-100 text-sm font-medium", className)} {...props}>
        {children}
      </thead>
    );
  }

// Table Header Component
function TableHeader({ className, children, ...props }: React.HTMLProps<HTMLTableSectionElement>) {
  return (
    <thead className={cn("bg-gray-100 text-sm font-medium", className)} {...props}>
      {children}
    </thead>
  );
}

// Table Body Component
function TableBody({ children, ...props }: React.HTMLProps<HTMLTableSectionElement>) {
  return (
    <tbody className="text-sm" {...props}>
      {children}
    </tbody>
  );
}

// Table Row Component
function TableRow({ className, children, ...props }: React.HTMLProps<HTMLTableRowElement>) {
  return (
    <tr className={cn("border-t", className)} {...props}>
      {children}
    </tr>
  );
}

// Table Cell Component
function TableCell({
  className,
  children,
  align = "left",
  ...props
}: React.HTMLProps<HTMLTableCellElement> & { align?: "left" | "center" | "right" }) {
  return (
    <td
      className={cn(
        "px-4 py-2 text-sm",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}

export { Table, TableHead, TableHeader, TableBody, TableRow, TableCell };
*/